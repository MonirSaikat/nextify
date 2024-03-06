import React from "react";

export default function CreateSnippetPage() {
  return (
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

      <button>Submit</button>
    </form>
  );
}
