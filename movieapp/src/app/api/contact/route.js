import dbConnect from "@/utils/dbconn";
import Contact from '@/models/contact';
import { NextResponse } from "next/server";
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const body=req.join();
      await dbConn();
      await Contact.create(body);
      return NextResponse.json({
        message:"Message Sent sucussefully",
      },{
        status:200
      })
      } catch (error) {
        return NextResponse.json({
            message:"Message fail",
          },{
            status:500
          })
      }
    } else {
      // Handle any other HTTP method
    }
  }