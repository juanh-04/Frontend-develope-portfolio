'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ContactPage() {
	return (
		<div className="py-16 md:py-24 flex items-center justify-center min-h-screen">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-3xl mx-auto"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
						<p className="text-lg text-muted-foreground">
							Have a question or want to work together? Feel free to reach out!
						</p>
					</motion.div>
						<motion.div variants={fadeIn('right', 0.3)}>
							<Card className="card-gradient h-full">
								<CardContent className="p-6">
									<h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
									<div className="space-y-4">
										<div className="flex items-center">
											<Phone className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">818-860-6248</p>
										</div>
										<div className="flex items-center">
											<Mail className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">juanh04@stanford.edu</p>
										</div>
										<div className="flex items-center">
											<MapPin className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">Stanford, California</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
						<motion.div variants={fadeIn('left', 0.3)}>
						</motion.div>
				</motion.div>
			</div>
		</div>
	);
}