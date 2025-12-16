"use client";

import { useState } from "react";
import { Toast } from "@repo/ui/src/base-ui";
import Button from "@repo/ui/src/components/button/button";

function ToastButton() {
  const toastManager = Toast.useToastManager();
  const [count, setCount] = useState(0);

  function createToast(status: "info" | "success" | "error" | "warning") {
    setCount((prev) => prev + 1);
    toastManager.add({
      data: { status },
      description: `توست ${count + 1} ساخته شد`,
    });
  }

  return (
    <div className="f-align gap-3 mt-6">
      <Button variant="fill" color="info" onClick={() => createToast("info")}>
        نمایش اطلاعات
      </Button>
      <Button variant="fill" color="success" onClick={() => createToast("success")}>
        نمایش موفقیت
      </Button>
      <Button variant="fill" color="error" onClick={() => createToast("error")}>
        نمایش خطا
      </Button>
      <Button variant="fill" color="warning" onClick={() => createToast("warning")}>
        نمایش هشدار
      </Button>
    </div>
  );
}

export default ToastButton;