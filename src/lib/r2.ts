import { createClient } from "@supabase/supabase-js";
import { env } from "./env";

const supabase = createClient(
  env.SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

type UploadAudioOptions = {
  buffer: Buffer;
  key: string;
  contentType?: string;
};

export async function uploadAudio({
  buffer,
  key,
  contentType = "audio/wav",
}: UploadAudioOptions): Promise<void> {
  const { error } = await supabase.storage
    .from(env.SUPABASE_BUCKET_NAME)
    .upload(key, buffer, {
      contentType,
      upsert: true,
    });

  if (error) {
    throw error;
  }
}

export async function deleteAudio(key: string): Promise<void> {
  const { error } = await supabase.storage
    .from(env.SUPABASE_BUCKET_NAME)
    .remove([key]);

  if (error) {
    throw error;
  }
}

export async function getSignedAudioUrl(
  key: string
): Promise<string> {
  const { data, error } = await supabase.storage
    .from(env.SUPABASE_BUCKET_NAME)
    .createSignedUrl(key, 60 * 60);

  if (error) {
    throw error;
  }

  return data.signedUrl;
}
