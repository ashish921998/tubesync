import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	DropdownMenuTrigger,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuItem,
	DropdownMenuContent,
	DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
} from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default function Page() {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="bg-gray-900 px-4 py-3 shadow-md dark:bg-gray-800">
				<div className="container mx-auto flex items-center justify-between">
					<Link className="flex items-center gap-2 text-white" href="#">
						<VideoIcon className="h-6 w-6" />
						<span className="text-lg font-semibold">Tubesync</span>
					</Link>
					<nav className="hidden space-x-4 md:flex">
						<Link
							className="rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
							href="/dashboard"
						>
							Dashboard
						</Link>
						<Link
							className="rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
							href="/uploads"
						>
							Upload
						</Link>
						<Link
							className="rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
							href="#"
						>
							Publish
						</Link>
						<Link
							className="rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
							href="#"
						>
							Collaborate
						</Link>
					</nav>
					<div className="flex items-center gap-2">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button size="icon" variant="ghost">
									<Image
										alt="Avatar"
										className="rounded-full"
										height={32}
										src="/placeholder.svg"
										style={{
											aspectRatio: "32/32",
											objectFit: "cover",
										}}
										width={32}
									/>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Settings</DropdownMenuItem>
								<DropdownMenuItem>Logout</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</header>
			<main className="flex-1 bg-gray-100 dark:bg-gray-950">
				<div className="container mx-auto py-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						<Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
							<CardHeader>
								<CardTitle>Dashboard</CardTitle>
								<CardDescription>
									Overview of your uploaded videos, status, and analytics.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-3 gap-4">
									<div className="col-span-1 flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300">
										<VideoIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
										<div className="text-2xl font-bold">120</div>
										<div className="text-sm text-gray-500 dark:text-gray-400">
											Videos Uploaded
										</div>
									</div>
									<div className="col-span-1 flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300">
										<CheckIcon className="h-8 w-8 text-green-500" />
										<div className="text-2xl font-bold">85</div>
										<div className="text-sm text-gray-500 dark:text-gray-400">
											Videos Published
										</div>
									</div>
									<div className="col-span-1 flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300">
										<GaugeIcon className="h-8 w-8 text-yellow-500" />
										<div className="text-2xl font-bold">35</div>
										<div className="text-sm text-gray-500 dark:text-gray-400">
											Videos Pending
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
							<CardHeader>
								<CardTitle>File Upload</CardTitle>
								<CardDescription>
									Upload your raw and edited video files to manage your content.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid gap-4">
									<div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300">
										<div className="flex items-center gap-4">
											<FileIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
											<div>
												<div className="font-medium">Intro Video</div>
												<div className="text-sm text-gray-500 dark:text-gray-400">
													Raw footage
												</div>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<Button
												className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
												size="sm"
												variant="outline"
											>
												Upload
											</Button>
											<Button
												className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
												size="sm"
												variant="outline"
											>
												View
											</Button>
										</div>
									</div>
									<div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300">
										<div className="flex items-center gap-4">
											<FileIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
											<div>
												<div className="font-medium">Outro Video</div>
												<div className="text-sm text-gray-500 dark:text-gray-400">
													Edited footage
												</div>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<Button
												className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
												size="sm"
												variant="outline"
											>
												Upload
											</Button>
											<Button
												className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
												size="sm"
												variant="outline"
											>
												View
											</Button>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
							<CardHeader>
								<CardTitle>Publish</CardTitle>
								<CardDescription>
									Publish your videos directly to your YouTube channel.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid gap-4">
									<div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300">
										<div className="flex items-center gap-4">
											<VideoIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
											<div>
												<div className="font-medium">Intro Video</div>
												<div className="text-sm text-gray-500 dark:text-gray-400">
													Ready to publish
												</div>
											</div>
										</div>
										<Button
											className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
											size="sm"
										>
											Publish
										</Button>
									</div>
									<div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300">
										<div className="flex items-center gap-4">
											<VideoIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
											<div>
												<div className="font-medium">Outro Video</div>
												<div className="text-sm text-gray-500 dark:text-gray-400">
													Pending review
												</div>
											</div>
										</div>
										<Button
											className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
											size="sm"
											variant="outline"
										>
											Review
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
							<CardHeader>
								<CardTitle>Collaborate</CardTitle>
								<CardDescription>
									Review, comment, and approve videos with your team.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid gap-4">
									<div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300">
										<div className="flex items-center gap-4">
											<Avatar>
												<AvatarImage
													alt="@shadcn"
													src="/placeholder-avatar.jpg"
												/>
												<AvatarFallback>JP</AvatarFallback>
											</Avatar>
											<div>
												<div className="font-medium">John Doe</div>
												<div className="text-sm text-gray-500 dark:text-gray-400">
													Commented on Intro Video
												</div>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<Button
												className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
												size="sm"
												variant="outline"
											>
												View
											</Button>
											<Button
												className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
												size="sm"
											>
												Approve
											</Button>
										</div>
									</div>
									<div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300">
										<div className="flex items-center gap-4">
											<Avatar>
												<AvatarImage
													alt="@shadcn"
													src="/placeholder-avatar.jpg"
												/>
												<AvatarFallback>JP</AvatarFallback>
											</Avatar>
											<div>
												<div className="font-medium">Jane Smith</div>
												<div className="text-sm text-gray-500 dark:text-gray-400">
													Requested changes on Outro Video
												</div>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<Button
												className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
												size="sm"
												variant="outline"
											>
												View
											</Button>
											<Button
												className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
												size="sm"
											>
												Approve
											</Button>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
			<footer className="bg-gray-900 px-4 py-6 text-gray-400 dark:bg-gray-800">
				<div className="container mx-auto flex items-center justify-between">
					<div className="text-sm">© 2024 Tubesync</div>
					<nav className="flex items-center gap-4">
						<Link
							className="hover:text-gray-300 transition-colors duration-300"
							href="#"
						>
							Terms
						</Link>
						<Link
							className="hover:text-gray-300 transition-colors duration-300"
							href="#"
						>
							Privacy
						</Link>
						<Link
							className="hover:text-gray-300 transition-colors duration-300"
							href="#"
						>
							Support
						</Link>
					</nav>
				</div>
			</footer>
		</div>
	);
}

function CheckIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M20 6 9 17l-5-5" />
		</svg>
	);
}

function FileIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
		</svg>
	);
}

function GaugeIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m12 14 4-4" />
			<path d="M3.34 19a10 10 0 1 1 17.32 0" />
		</svg>
	);
}

function VideoIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
			<rect x="2" y="6" width="14" height="12" rx="2" />
		</svg>
	);
}
