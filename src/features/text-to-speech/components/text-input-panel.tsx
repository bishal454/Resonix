"use client";

import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { GenerateButton } from "@/features/text-to-speech/components/generate-button";
import { ttsFormOptions } from "@/features/text-to-speech/components/text-to-speech-form";
import { useTypedAppFormContext } from "@/hooks/use-app-form";
import { useStore } from "@tanstack/react-form";
import { Coins } from "lucide-react";
import { COST_PER_UNIT, TEXT_MAX_LENGTH } from "../data/constants";

export function TextInputPanel() {
  const form = useTypedAppFormContext(ttsFormOptions);

  const text = useStore(form.store, (s) => s.values.text);

  const isSubmitting = useStore(form.store, (s) => s.isSubmitting);
  const isValid = useStore(form.store, (s) => s.isValid);

  return (
    <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
      {/* text input area */}
      <div className="relative min-h-0 w-full min-w-0 flex-1">
        <form.Field name="text">
          {(field) => (
            <Textarea
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Start typing or paste your text here..."
              className="absolute inset-0 h-full w-full field-sizing-fixed resize-none border-0 bg-transparent p-4 pb-6 text-base leading-relaxed tracking-tight wrap-break-word shadow-none focus-visible:ring-0 lg:p-6 lg:pb-8"
              maxLength={TEXT_MAX_LENGTH}
              disabled={isSubmitting}
            />
          )}
        </form.Field>

        {/* bottom fade overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-background to-transparent" />
      </div>

      {/* action bar */}
      <div className="shrink-0 border-t p-4 lg:p-6">
        {text.length > 0 ? (
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <Badge variant="outline" className="w-fit gap-1.5 border-dashed">
              <Coins className="size-3 text-chart-5" />
              <span className="text-xs">
                <span className="tabular-nums">
                  ₹{(text.length * COST_PER_UNIT).toFixed(4)}
                </span>
                &nbsp; estimated
              </span>
            </Badge>
            <div className="flex items-center justify-between gap-3 lg:justify-end">
              <p className="text-xs tracking-tight">
                {text.length.toLocaleString()}
                <span className="text-muted-foreground">
                  &nbsp;/ &nbsp;{TEXT_MAX_LENGTH.toLocaleString()}
                  characters
                </span>
              </p>
              <GenerateButton
                size="sm"
                disabled={isSubmitting || !isValid}
                isSubmitting={isSubmitting}
                onSubmit={() => form.handleSubmit()}
              />
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Get started by typing or pasting text above
          </p>
        )}
      </div>
    </div>
  );
}
