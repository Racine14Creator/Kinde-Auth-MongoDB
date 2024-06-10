import DBconnection from "@/lib/mongodb";
import User from "@/models/User.model";
import { NextResponse } from "next/server";

// Route to check if a user exists
export async function GET(request) {
  const userEmail = request.nextUrl.pathname.split("/").pop();

  await DBconnection();

  const user = await User.findOne({ email: userEmail });
  if (user) {
    return NextResponse.json({ message: "User exists" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
}

// Route to create a new user
export async function POST(request) {
  const { email, family_name, given_name, picture, userId } =
    await request.json();

  await DBconnection();

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    await User.create({
      email,
      name: family_name,
      given_name,
      profile: picture,
      userId,
    });
    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } else {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 409 }
    );
  }
}

// Route to delete a user
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  await DBconnection();

  const event = await User.findByIdAndDelete(id);
  if (event) {
    return NextResponse.json({ message: "User Deleted" }, { status: 201 });
  } else {
    return NextResponse.json(
      { message: "Something went wrong..." },
      { status: 500 }
    );
  }
}
