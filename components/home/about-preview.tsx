'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="About Me"
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="relative h-[500px] rounded-lg overflow-hidden"
					>
						<Image
							src="/IMG_7454.jpeg"
							alt="Engineer portrait"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="flex flex-col justify-center"
					>
						<p className="text-muted-foreground mb-6">
							I’m a junior at Stanford University studying Mechanical Engineering with a passion for designing and building from the spark of an idea to a finished project. I thrive on the process of bringing concepts to life and enjoy working across disciplines to solve complex problems. My experience as a Systems and Test Engineer at Northrop Grumman has strengthened my technical foundation and given me hands-on exposure to high-impact projects. Along the way, I’ve pushed myself to develop a diverse set of skills as an engineer, combining creativity with technical rigor. I’m excited to continue expanding my skillset and mindset, taking on new challenges, and making a meaningful impact through my work.
						</p>

						<div className="grid grid-cols-1 gap-3 mb-6">
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Education</h4>
									<p className="text-sm text-muted-foreground">Currently pursuing a Bachelor's degree in Mechanical Engineering at Stanford 
									University.</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Experience</h4>
									<p className="text-sm text-muted-foreground">I have previous work experience as a Systems Integration and Test engineer at Northrop Grumman.</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Skills</h4>
									<p className="text-sm text-muted-foreground">MATLAB; Autodesk Fusion360; Python; Blender; Welding; Onshape; Spanish; Laser Cutting; 3D Printing; Rapid Prototyping; Design Sketching; Solid Works; Manual Mill; Manual Lathe</p>
								</CardContent>
							</Card>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}