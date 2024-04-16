import { testimonials } from "@/app/data/data";

export async function GET() {
  return Response.json(testimonials);
}

// export async function GET() {
//   const formattedTestimonials = JSON.stringify(testimonials, null, 2);
//   return new Response(formattedTestimonials, {
//     headers: { "Content-Type": "application/json" },
//   });
// }