import CodingComponent from "@/components/snippets/CodingComponent";
import Head from "next/head";
import React from "react";

export default function CreateSnippetPage() {
  return (
    <>
    <Head>
      <title>New Code Snippet</title>
    </Head>
      <form>
        <fieldset>
          <label>
            Title
            <input
              name="first_name"
              placeholder="e.g. laravel pagination"
              autocomplete="given-name"
            />
          </label>
        </fieldset>

        <CodingComponent />

        <button>Submit</button>
      </form>
    </>
  );
}
