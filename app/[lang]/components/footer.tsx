interface FooterProps {
  dict: any
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">© 2024 Alex Johnson. {dict.footer.rights}</p>
      </div>
    </footer>
  )
}
