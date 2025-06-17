import { NextRequest, NextResponse } from "next/server";
import Run from "@utils/gemini";

export async function POST(req: NextRequest) {
  // API
  console.log("API Called :")

  const { prompt } = await req.json()
  if(!prompt) {
    return NextResponse.json({message: "content not present"}, {status: 300});
  }
  // Content
  console.log("Content recieved :")


  try {
    const response = await Run("You are a senior software developer and manager, you revied some files and provided feedback on them indivually, now from these feedbacks give a general feedback and suggestions, make it small and concise -" + prompt)
    return NextResponse.json({text: response}, {status: 200})

  }catch(err) {
    return NextResponse.json({error: err}, {status: 500})
  }


}