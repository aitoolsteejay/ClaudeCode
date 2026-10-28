import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../keystatic.config";

const handler = makeRouteHandler({ config });
const notFound = () => new Response("Not found", { status: 404 });
const live = process.env.NODE_ENV !== "production";

export const GET = live ? handler.GET : notFound;
export const POST = live ? handler.POST : notFound;
