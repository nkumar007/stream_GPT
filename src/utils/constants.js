export const Netflix_background =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const API_KEY = "cd3877ba466519e7cceeb08fbb489b4a";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

// export const OPENAI_KEY = "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";
export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;
