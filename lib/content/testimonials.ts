export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  event?: string
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const fs = await import("fs/promises")
    const path = await import("path")
    
    const filePath = path.join(process.cwd(), "content", "testimonials.json")
    const fileContent = await fs.readFile(filePath, "utf-8")
    return JSON.parse(fileContent)
  } catch (error) {
    console.error("Error loading testimonials:", error)
    return []
  }
}

