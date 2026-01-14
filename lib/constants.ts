export const siteConfig = {
	name: 'Work',
	description:
		'A professional portfolio website template for engineering students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
	],
	links: {
		linkedin: 'https://www.linkedin.com/in/juanhjr04/',
		email: 'mailto:juanh04@stanford.edu',
		phone: 'tel:818-860-6248',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'System Integration and Test Engineer',
		company: 'Northrop Grumman',
		location: 'Los Angeles, California',
		startDate: 'June 2025',
		endDate: 'Aug 2025',
		description: [
			'Led a continuous improvement project to make next-generation test equipment backwards compatible, adapting backend programs for legacy navigation systems, improving reliability and reducing multi-hour test cycles.',
			'Conducted flight path simulations, thermal tests, and shock testing to verify GPS and Internal Navigation System communication in extreme environments through MATLAB data analysis.',
			'Created and updated operational procedures and user guides to streamline testing processes and establish consistency for receiver testing.',
		],
		technologies: ['MATLAB', 'Collaboration'],
	},
	{
		title: 'Financial Officer & Director of Social and Recruitment',
		company: 'Stanford Axe Committee',
		location: 'Stanford, California',
		startDate: 'September 2023',
		endDate: 'Present',
		description: [
			'Managed a $33,000 budget, across an academic year and helped allocate the budget between a large-scale rally, working with multiple student organizations and external vendors, as well as food and equipment for the club.',
			'Led recruitment of new members, and fostered a community by planning events and establishing an active line of communication between club officers and new members.',
		],
		technologies: ['MATLAB', 'CAD', 'Data Analysis', 'Python'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
};

export const projects: Project[] = [
	{
		title: 'Victorian Lantern',
		description: 
			`What?: In 10 weeks, ideate, design, and fabricate a project using the tools in the Product Realization Lab.

			How?: Used the sheet metal tool in Fusion360 to create a frame, that can be fastened together Sand casted a lid, with allignment ports Using manual mill and lathe create a decorative finial.

			Results: Created a working Victorian-style lantern, which lights up using LEDs Finished with a black powder coat and a wood base, so the metal does not scratch the tables it sits on`,
		image: "/IMG_9902.jpg",
		tags: ['Rapid Prototyping', 'Fusion360', 'Milling', 'Lathe'],
	},
	{
		title: 'RC-Plane',
		description: 
			`What?: Collaborated with a team to design, calculate, and build a fully functional RC plane over one month. 

			How?: Began with baseline calculations and understanding which airfoil options we wanted for our wings.
                  Used styrofoam and balsa wood to build the body and control arm.
                  Finally installed wiring for the propeller, receiver, and battery pack. 

			Results: The plane was able to take off and fly from an accelerated take off, and manuevered with full response from our remote control.`,
		image: "/EE3E6369-3EB3-4CFD-A36E-64E169044408.JPG",
		tags: ['Collaboration', 'Electronics', 'Aircraft Design'],
	},
	{
		title: 'Redesign the Catapult',
		description: 
			`What?: Take a classic feat of engineering, in this case, the catapult, and redesign it with two forms of actuation. 

			How?: Started with engineering sketches, to identify changes. Then two prototypes to test a locking control arm, synced to a pully that launches the ball in the air. 

			Results: Constructed a final design based on the CAD model using 3D printed parts and laser-cut birch.Created a catapult that was able to launch a ping-pong ball 3 feet.`,
		image: "/IMG_9146.jpg",
		tags: ['Fusion360', '3D Printing', 'Laser Cutting'],
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science',
		field: 'Mechanical Engineering',
		institution: 'Stanford University',
		location: 'Stanford, California',
		startDate: 'Sep 2023',
		endDate: 'Present',
		gpa: '3.4/4.0',
		achievements: [
			'Dean\'s List (All Semesters)',
			'Academic Excellence Scholarship',
			'Senior Design Project Award',
		],
	},
];