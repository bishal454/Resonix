import { PageHeader } from "@/components/page-header";

export function TextToSpeechLayout({
    children,

}:{
    children:React.ReactNode;


}
){
    return (
        <div className="flex h-full min-h-0 flex-col overflow-hidden">
            <PageHeader title="Text to speech" />
            <div className="flex min-h-0 min-w-0 flex-1 flex-col">{children}</div>
        </div>
    )
}