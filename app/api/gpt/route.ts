import { NextResponse } from "next/server";
import OpenAI from "openai";

const key = process.env.OPENAI_KEY;
const openai = new OpenAI({
  apiKey: key, // Use server-side API key
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    // You can uncomment the actual API call when it's ready
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Adjust as needed
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
    });

    const responseText = completion.choices[0].message.content;
    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
