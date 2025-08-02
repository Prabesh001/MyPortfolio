import React, {useState} from 'react'
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { toast } from "sonner";

const Contact = () => {  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendMessage = () => {
    toast.info("Feature not completed yet!");
  };

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const copyToClipboard = async()=>{
   try {
     await navigator.clipboard.writeText("prabeshdaahal123@gmail.com")
      toast.success("Copied to clipboard!")
   } catch (error) {
    console.log(error.message)
    toast.error(error.message)
   }
  }
  
  return (
    <div><section id="contact" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slide-right">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's work together
              </h3>
              <p className="text-gray-300 text-lg">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors" >
                  <Mail className="mr-3 h-5 w-5 text-blue-400" />
                 <span onClick={copyToClipboard}>prabeshdaahal123@gmail.com</span>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/Prabesh001"
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/prabesh-dahal-53b64a351/"
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700 animate-slide-left">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-8 animate-fade-in">
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4 animate-bounce" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Thank you!
                    </h3>
                    <p className="text-gray-300">
                      Your message has been sent successfully.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        required
                        rows={5}
                        className="input-field"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="btn-primary w-full"
                      onMouseEnter={handleSendMessage}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section></div>
  )
}

export default Contact