import { NextRequest, NextResponse } from "next/server";
import Run from "@utils/gemini";

export async function POST(req: NextRequest) {
  // API
  console.log("API Called :")

  const { content } = await req.json()
  if(!content) {
    return NextResponse.json({message: "content not present"}, {status: 300});
  }
  // Content
  console.log("Content recieved :")


  try {
    Run()
    const text = "Hello"
    return NextResponse.json({text}, {status: 200})

  }catch(err) {
    return NextResponse.json({error: err}, {status: 500})
  }


}