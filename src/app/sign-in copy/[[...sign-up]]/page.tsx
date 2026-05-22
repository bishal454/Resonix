import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex  min-h-screen items-center justify-center bg-background">
      <SignUp
        appearance={{
          elements: {
            rootBox: "x-auto",
            card: "shadow-lg border rounded-lg p-6",
          },
        }}
      />
    </div>
  );
}
