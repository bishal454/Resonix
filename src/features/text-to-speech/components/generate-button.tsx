"use client"


import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"


export function GenerateButton({
    // genrate function will accept 

    size,
    disabled,
    isSubmitting,
    onSubmit,
    className,

}:{

    //now types fo them 

    
    size?:"default"|"sm";
    disabled:boolean;
    isSubmitting:boolean;
    onSubmit:()=>void;
    className?:string;

    
}){
    return(
        <Button
        size={size}
        className={className}
        onClick={onSubmit}
        disabled={disabled}
      >
        {isSubmitting ?(
            <>

            <Spinner className="size-3"/>
            Generating....
            </>


        ):(
            "Generate speech"


        )}
        </Button>

    )
};