/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GITHOXj4q3j
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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
import Image from "next/image";

export default function Page() {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="bg-gray-900 px-4 py-3 shadow-md dark:bg-gray-800">
				<div className="container mx-auto flex items-center justify-between">
					<Link className="flex items-center gap-2 text-white" href="#">
						<VideoIcon className="h-6 w-6" />
						<span className="text-lg font-semibold">Vidify</span>
					</Link>
					<nav className="hidden space-x-4 md:flex">
						<Link
							className="rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
							href="/dashboard"
						>
							Dashboard
						</Link>
						<Link
							className="rounded-md px-3 py-2 text-white bg-gray-800"
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
					<div className="grid grid-cols-1 gap-8">
						<Card>
							<CardHeader>
								<CardTitle>Upload Videos</CardTitle>
								<CardDescription>
									Drag and drop your video files or click to browse and upload.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid gap-4">
									<div className="flex items-center justify-center rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 cursor-pointer">
										<div className="text-center space-y-2">
											<UploadIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 mx-auto" />
											<div className="font-medium">
												Drag and drop files here
											</div>
											<div className="text-sm text-gray-500 dark:text-gray-400">
												or click to browse
											</div>
											<input className="hidden" type="file" />
										</div>
									</div>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
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
												<Button size="sm" variant="outline">
													Upload
												</Button>
												<Button size="sm" variant="outline">
													View
												</Button>
											</div>
										</div>
										<div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
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
												<Button size="sm" variant="outline">
													Upload
												</Button>
												<Button size="sm" variant="outline">
													View
												</Button>
											</div>
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
					<div className="text-sm">© 2024 Vidify</div>
					<nav className="flex items-center gap-4">
						<Link className="hover:text-gray-300" href="#">
							Terms
						</Link>
						<Link className="hover:text-gray-300" href="#">
							Privacy
						</Link>
						<Link className="hover:text-gray-300" href="#">
							Support
						</Link>
					</nav>
				</div>
			</footer>
		</div>
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

function UploadIcon(props) {
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
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<polyline points="17 8 12 3 7 8" />
			<line x1="12" x2="12" y1="3" y2="15" />
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
