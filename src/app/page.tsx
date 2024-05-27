import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Page() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
				<div className="flex items-center gap-4">
					<h1 className="text-2xl font-bold">Tubesync</h1>
				</div>
			</header>
			<main className="flex-1 bg-gray-100 dark:bg-gray-800 p-8">
				<div className="max-w-6xl mx-auto">
					<Card className="mx-auto max-w-md">
						<CardHeader className="space-y-1">
							<CardTitle className="text-2xl font-bold">Sign In</CardTitle>
							<CardDescription>
								Enter your email and password to access your account.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									placeholder="m@example.com"
									required
									type="email"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<Input id="password" required type="password" />
							</div>
							<div className="flex items-center justify-between">
								<Link className="text-sm underline" href="#">
									Forgot your password?
								</Link>
								<Button className="ml-auto" type="submit">
									Sign in
								</Button>
							</div>
						</CardContent>
						<CardFooter className="text-center text-sm">
							Dont have an account?
							<Link className="underline" href="#">
								Sign up
							</Link>
						</CardFooter>
					</Card>
				</div>
			</main>
			<footer className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
				<p className="text-sm">© 2024 Tubesync. All rights reserved.</p>
				<div className="flex items-center gap-4">
					<Link className="hover:underline" href="#">
						Terms of Service
					</Link>
					<Link className="hover:underline" href="#">
						Privacy Policy
					</Link>
					<Link className="hover:underline" href="#">
						Contact
					</Link>
				</div>
			</footer>
		</div>
	);
}
