import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

interface ContactProps {
  dict: any
}

export function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.contact.title}</h2>
          <p className="text-lg text-muted-foreground mb-12">{dict.contact.description}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto text-primary" />
                <CardTitle>{dict.contact.email}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">alex@example.com</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto text-primary" />
                <CardTitle>{dict.contact.phone}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 mx-auto text-primary" />
                <CardTitle>{dict.contact.location}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
