"use client";
import AhForm from "@/components/form/AhForm";
import React, { useRef, useEffect } from "react";
import { BsTypeUnderline } from "react-icons/bs";
import { FaBold, FaListOl, FaListUl, FaImage } from "react-icons/fa";
import { GoItalic } from "react-icons/go";
import { LuCode } from "react-icons/lu";
type TextEditorProps = {
  setContent: React.Dispatch<React.SetStateAction<string>>;
};
export default function TextEditor({ setContent }: TextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  const format = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  const applyHeading = (className: string) => {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;
    const range = selection.getRangeAt(0);
    console.log(range);
    const wrapper = document.createElement("div");
    wrapper.className = className;
    range.surroundContents(wrapper);
  };

  const insertCodeBlock = () => {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const range = selection.getRangeAt(0);

    const codeWrapper = document.createElement("pre");
    codeWrapper.className =
      "relative bg-gray-900 text-white p-3 rounded-md overflow-auto my-2";
    const code = document.createElement("code");
    code.textContent = selection.toString() || "your code here...";

    // copy button
    const copyBtn = document.createElement("button");
    copyBtn.textContent = "Copy";
    copyBtn.className =
      "absolute top-2 right-2 text-xs bg-gray-700 px-2 py-1 rounded text-white hover:bg-gray-600";
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(code.textContent || "");
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
    };

    codeWrapper.appendChild(copyBtn);
    codeWrapper.appendChild(code);

    // Insert the code block
    range.deleteContents();
    range.insertNode(codeWrapper);

    // Insert an empty paragraph after code block so cursor can move out
    const emptyParagraph = document.createElement("div");
    emptyParagraph.innerHTML = "<br>";
    codeWrapper.after(emptyParagraph);

    // Move cursor to the new empty paragraph
    const newRange = document.createRange();
    newRange.setStart(emptyParagraph, 0);
    newRange.collapse(true);

    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(newRange);
    }

    // Focus the editor
    editorRef.current?.focus();
  };

  // Insert image into editor
  const insertImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = document.createElement("img");
      img.src = event.target?.result as string;
      img.className = `w-full h-[250px] my-2 rounded`;
      editorRef.current?.appendChild(img);
    };
    reader.readAsDataURL(file);
  };

  const handleBlog = () => {
    const content = editorRef.current?.innerHTML || "";
    setContent(content);
    // console.log("Blog Content:", content);
  };

  // keep copy buttons working inside editor
  useEffect(() => {
    const editor = editorRef.current;
    if (!editor) return;
    editor.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "BUTTON" && target.textContent?.includes("Copy")) {
        e.stopPropagation();
      }
    });
  }, []);

  // auto-apply tailwind classes to UL and OL
  useEffect(() => {
    const editor = editorRef.current;
    if (!editor) return;

    const observer = new MutationObserver(() => {
      editor.querySelectorAll("ul").forEach((ul) => {
        ul.classList.add("list-disc", "pl-6", "my-2");
      });
      editor.querySelectorAll("ol").forEach((ol) => {
        ol.classList.add("list-decimal", "pl-6", "my-2");
      });
    });

    observer.observe(editor, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="mt-11 w-11/12 mx-auto">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-3 text-black border border-gray-400 rounded-md p-2 bg-gray-50 items-center">
        {/* Bold */}
        <button
          type="button"
          onClick={() => format("bold")}
          className="p-1 hover:bg-gray-200 rounded"
        >
          <FaBold />
        </button>
        {/* Underline */}
        <button
          type="button"
          onClick={() => format("underline")}
          className="p-1 hover:bg-gray-200 rounded"
        >
          <BsTypeUnderline />
        </button>
        {/* Italic */}
        <button
          type="button"
          onClick={() => format("italic")}
          className="p-1 hover:bg-gray-200 rounded"
        >
          <GoItalic />
        </button>

        {/* Heading Dropdown */}
        <select
          onChange={(e) => applyHeading(e.target.value)}
          className="p-1 border border-gray-300 rounded bg-white"
          defaultValue=""
        >
          <option value="" disabled>
            Heading
          </option>
          <option value="text-4xl font-bold">H1</option>
          <option value="text-3xl font-semibold">H2</option>
          <option value="text-2xl font-medium">H3</option>
          <option value="text-xl font-medium">H4</option>
        </select>

        {/* Text Color */}
        <label className="flex items-center gap-1 text-sm">
          Text Color
          <input
            type="color"
            onChange={(e) => format("foreColor", e.target.value)}
            className="w-8 h-6 border border-gray-300 rounded cursor-pointer"
          />
        </label>

        {/* Background Color */}
        <label className="flex items-center gap-1 text-sm">
          Highlight
          <input
            type="color"
            onChange={(e) => format("hiliteColor", e.target.value)}
            className="w-8 h-6 border border-gray-300 rounded cursor-pointer"
          />
        </label>

        {/* Ordered List */}
        <button
          type="button"
          onClick={() => format("insertOrderedList")}
          className="p-1 hover:bg-gray-200 rounded"
        >
          <FaListOl />
        </button>

        {/* Unordered List */}
        <button
          type="button"
          onClick={() => format("insertUnorderedList")}
          className="p-1 hover:bg-gray-200 rounded"
        >
          <FaListUl />
        </button>

        {/* Image */}
        <label className="p-1 hover:bg-gray-200 rounded cursor-pointer">
          <FaImage />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={insertImage}
          />
        </label>

        {/* Code Block */}
        <button
          type="button"
          onClick={insertCodeBlock}
          className="p-1 hover:bg-gray-200 rounded"
        >
          <LuCode />
        </button>
      </div>

      {/* Form */}
      <AhForm onSubmit={handleBlog}>
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          className="h-64  text-black border border-gray-400 rounded-md p-3 mt-3 focus:outline-none bg-white overflow-auto"
        >
          Start writing your blog here...
        </div>

        <button
          type="submit"
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Preview
        </button>
      </AhForm>
    </div>
  );
}
