import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { socialLinks } from "@/data/social";
import { Github, Linkedin, Mail } from "lucide-react";

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail } as const;

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();

  useEffect(() => { document.title = "Contact — Neuman Alkhalil"; }, []);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (data: ContactForm) => {
    console.log("Contact form submitted:", data);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <div className="container max-w-xl py-16 px-4">
      <SectionHeading title="Get in Touch" subtitle="I'd love to hear from you" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl><Input placeholder="What's this about?" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl><Textarea placeholder="Your message..." rows={5} {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            <Send className="h-4 w-4 mr-1.5" />
            Send Message
          </Button>
        </form>
      </Form>

      <div className="mt-10 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground mb-4">Or reach out directly:</p>
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.icon === "mail" ? undefined : "_blank"}
                rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 text-sm"
                aria-label={link.name}
              >
                <Icon className="h-4 w-4" />
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
