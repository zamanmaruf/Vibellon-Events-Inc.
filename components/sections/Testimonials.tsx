import { getTestimonials } from "@/lib/content/testimonials"

export async function Testimonials() {
  const testimonials = await getTestimonials()

  return (
    <section className="relative w-full py-16 md:py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg.png)',
        }}
      />
      <div className="relative container mx-auto max-w-5xl space-y-12 z-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">What Founders Say</h2>
          <p className="text-lg text-muted-foreground">
            Real outcomes from real entrepreneurs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div key={testimonial.id} className="space-y-4 p-6 rounded-lg border border-border bg-card">
              <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
              <div className="pt-4 border-t">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                {testimonial.event && (
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.event}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

