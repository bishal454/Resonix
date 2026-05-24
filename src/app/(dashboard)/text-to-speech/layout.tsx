import { TextToSpeechLayout } from "@/features/text-to-speech/views/text-to-speech-layout";


// its is default export bcz of the reservedfile name.
export default function Layout({

children,

}
:{
    children:React.ReactNode

}){
    return <TextToSpeechLayout>{children}</TextToSpeechLayout>;

}