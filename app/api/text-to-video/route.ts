import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = request.json();

  return NextResponse.json(body);
};
