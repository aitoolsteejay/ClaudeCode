"use client";

import { useState, useRef } from "react";
import { CalculatorInputs } from "@/components/tools/roi-calculator/CalculatorInputs";
import { ResultsDashboard } from "@/components/tools/roi-calculator/ResultsDashboard";
import { FunnelChart } from "@/components/tools/roi-calculator/FunnelChart";
import { RevenueChart } from "@/components/tools/roi-calculator/RevenueChart";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const currencies = {
  USD: "$",
  INR: "₹",
  AUD: "A$",
  AED: "د.إ",
  SGD: "S$",
  HKD: "HK$",
  CNY: "¥",
  JPY: "¥",
  CAD: "C$",
};

export default function RoiCalculatorClient() {
  const resultsRef = useRef<HTMLDivElement>(null);
  const [currency, setCurrency] = useState("USD");
  const [connectionRequests, setConnectionRequests] = useState(0);
  const [acceptanceRate, setAcceptanceRate] = useState(0);
  const [replyRate, setReplyRate] = useState(0);
  const [positiveResponseRate, setPositiveResponseRate] = useState(50);
  const [meetingRateFromPositive, setMeetingRateFromPositive] = useState(30);
  const [closingRate, setClosingRate] = useState(0);
  const [averageTicketPrice, setAverageTicketPrice] = useState(0);
  const [transactionsPerYear, setTransactionsPerYear] = useState(1);
  const [monthsCustomerStays, setMonthsCustomerStays] = useState(0);
  const [duration, setDuration] = useState(12);
  const [monthlyCost, setMonthlyCost] = useState(0);

  // Calculations
  const totalRequests = Math.round(connectionRequests * duration);
  const acceptedConnections = Math.round(totalRequests * (acceptanceRate / 100));
  const replies = Math.round(acceptedConnections * (replyRate / 100));
  const positiveReplies = Math.round(replies * (positiveResponseRate / 100));
  const negativeReplies = Math.round(replies * ((100 - positiveResponseRate) / 100));
  const meetings = Math.round(positiveReplies * (meetingRateFromPositive / 100));

  // Sales Conversion Rate Adjustment: +1 percentage point
  const adjustedClosingRate = Math.min(closingRate + 1, 100);
  const deals = Math.round(meetings * (adjustedClosingRate / 100));

  // LTV Calculation with Duration Proration (retention in months)
  const fullLifetimeLTV = averageTicketPrice * transactionsPerYear * (monthsCustomerStays / 12);
  const coveredMonths = Math.min(duration, monthsCustomerStays);
  const effectiveLTV = Math.round(averageTicketPrice * transactionsPerYear * (coveredMonths / 12));

  const revenue = Math.round(deals * effectiveLTV);
  const totalServiceCost = Math.round(monthlyCost * duration);
  const roi = totalServiceCost > 0 ? Math.round(((revenue - totalServiceCost) / totalServiceCost) * 100) : 0;

  const currencySymbol = currencies[currency as keyof typeof currencies];

  const funnelData = [
    { label: "Connection Requests", value: totalRequests, percentage: 100, previousValue: totalRequests },
    { label: "Accepted Connections", value: acceptedConnections, percentage: acceptanceRate, previousValue: totalRequests },
    { label: "Total Replies", value: replies, percentage: replies > 0 ? (replies / acceptedConnections) * 100 : 0, previousValue: acceptedConnections },
    { label: "Positive Responses", value: positiveReplies, percentage: positiveResponseRate, previousValue: replies },
    { label: "Negative Responses", value: negativeReplies, percentage: 100 - positiveResponseRate, previousValue: replies },
    { label: "Meetings Booked", value: meetings, percentage: positiveReplies > 0 ? (meetings / positiveReplies) * 100 : 0, previousValue: positiveReplies },
    { label: "Deals Closed", value: deals, percentage: meetings > 0 ? (deals / meetings) * 100 : 0, previousValue: meetings },
  ];

  const handleExport = async () => {
    if (!resultsRef.current) return;

    toast.loading("Generating PDF...");

    try {
      const canvas = await html2canvas(resultsRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add logo
      pdf.addImage("/logo.png", "PNG", 10, 10, 40, 10);

      // Add title
      pdf.setFontSize(20);
      pdf.setTextColor(255, 255, 255);
      pdf.setFillColor(0, 0, 0);
      pdf.rect(0, 0, 210, 297, "F");
      pdf.text("ROI Calculator Results", 105, 35, { align: "center" });

      // Add results image
      pdf.addImage(imgData, "PNG", 0, 45, imgWidth, imgHeight);

      pdf.save("roi-calculator-results.pdf");
      toast.success("PDF exported successfully!");
    } catch (error) {
      console.error("Export failed:", error);
      toast.error("Failed to export PDF");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Main Content */}
      <main className="container mx-auto px-4 pt-28 pb-8">
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              ROI Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate your outreach ROI in real-time
            </p>
          </div>
          <Button
            onClick={handleExport}
            className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Results
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Panel - Inputs */}
          <div className="lg:col-span-4">
            <div className="bg-card border border-border rounded-2xl p-6 lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold text-foreground mb-6">Your Inputs</h2>
              <CalculatorInputs
                currency={currency}
                setCurrency={setCurrency}
                connectionRequests={connectionRequests}
                setConnectionRequests={setConnectionRequests}
                acceptanceRate={acceptanceRate}
                setAcceptanceRate={setAcceptanceRate}
                replyRate={replyRate}
                setReplyRate={setReplyRate}
                positiveResponseRate={positiveResponseRate}
                setPositiveResponseRate={setPositiveResponseRate}
                meetingRateFromPositive={meetingRateFromPositive}
                setMeetingRateFromPositive={setMeetingRateFromPositive}
                closingRate={closingRate}
                setClosingRate={setClosingRate}
                averageTicketPrice={averageTicketPrice}
                setAverageTicketPrice={setAverageTicketPrice}
                transactionsPerYear={transactionsPerYear}
                setTransactionsPerYear={setTransactionsPerYear}
                monthsCustomerStays={monthsCustomerStays}
                setMonthsCustomerStays={setMonthsCustomerStays}
                duration={duration}
                setDuration={setDuration}
                monthlyCost={monthlyCost}
                setMonthlyCost={setMonthlyCost}
                acceptedConnections={acceptedConnections}
                replies={replies}
                positiveReplies={positiveReplies}
                negativeReplies={negativeReplies}
                meetings={meetings}
                deals={deals}
                fullLifetimeLTV={fullLifetimeLTV}
                effectiveLTV={effectiveLTV}
              />
            </div>
          </div>

          {/* Right Panel - Results */}
          <div ref={resultsRef} className="lg:col-span-8 space-y-6">
            <ResultsDashboard
              totalRequests={totalRequests}
              acceptedConnections={acceptedConnections}
              replies={replies}
              positiveReplies={positiveReplies}
              negativeReplies={negativeReplies}
              meetings={meetings}
              deals={deals}
              revenue={revenue}
              roi={roi}
              currency={currency}
              currencySymbol={currencySymbol}
              fullLifetimeLTV={fullLifetimeLTV}
              effectiveLTV={effectiveLTV}
              acceptanceRate={acceptanceRate}
              replyRate={replyRate}
              positiveResponseRate={positiveResponseRate}
              meetingRateFromPositive={meetingRateFromPositive}
              closingRate={closingRate}
              adjustedClosingRate={adjustedClosingRate}
            />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <FunnelChart data={funnelData} currency={currency} />
              <RevenueChart
                duration={duration}
                revenue={revenue}
                currency={currency}
                currencySymbol={currencySymbol}
                serviceCost={totalServiceCost}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
