import { alertActions } from "@/app/actions";
import { useAppSelector } from "@/app/store";
import { AlertType } from "@/features/alertSlice";
import { useRouter } from "next/router";
import React, { useState, useEffect, useMemo, memo } from "react";
import toast, { Toaster, Toast } from "react-hot-toast";
import {
  MdClose,
  MdInfoOutline,
  MdErrorOutline,
  MdCheckCircleOutline,
} from "react-icons/md";

const ToastComponent = ({ t, alert }: { t: Toast; alert: AlertType }) => {
  useEffect(() => {
    if (!t.visible) {
      setTimeout(() => {
        alertActions.clearAlerts();
      }, 500);
    }
  }, [alert.message, t.visible]);
  return (
    <div
      key={t.id}
      className={`flex items-center h-auto border rounded-lg relative bg-white border-gray-300
       px-4 py-2 w-full max-w-md shadow-lg hover:shadow-none transition-all duration-400
       ${t.visible ? "bottom-0" : "-bottom-96"} ${
        alert.type === "error"
          ? "text-red-400 border-red-300"
          : alert.type === "success"
          ? `text-emerald-400 border-emerald-300`
          : ""
      }`}
    >
      <div
        className={`flex items-center rounded-lg justify-center px-4 py-2 font-bold ${
          alert.type === "error" || alert.type === "danger"
            ? `bg-red-400 text-red-200`
            : alert.type === "success"
            ? `bg-emerald-400 text-green-200`
            : "bg-gray-400 text-slate-200"
        }`}
      >
        {alert.type === "error" ? (
          <MdErrorOutline />
        ) : alert.type === "success" ? (
          <MdCheckCircleOutline />
        ) : (
          <MdInfoOutline />
        )}
      </div>
      <div
        className={`flex flex-col items-center justify-center ml-4 cursor-default ${
          alert.type === "error"
            ? `text-red-400`
            : alert.type === "success"
            ? `text-emerald-400`
            : ""
        }`}
      >
        <p className="font-semibold">{alert.message}</p>
      </div>
      <div
        className={`absolute top-2 right-2 cursor-pointer text-lg`}
        onClick={() => toast.dismiss(t.id)}
      >
        <MdClose />
      </div>
    </div>
  );
};

// This can be used through state
const MulipleAlerts = memo(() => {
  const { alerts } = useAppSelector((state) => state.notifications);
  const router = useRouter();
  const { asPath } = router;
  const [redirect, setRedirect] = useState(false);

  const getFirstLink = useMemo(() => {
    let filtered: any =
      alerts.length > 0
        ? alerts.filter((n: AlertType) => n?.redirect_link)
        : [];
    return (filtered.length > 0 && filtered[0].redirect_link) || null;
  }, [alerts]);

  useEffect(() => {
    if (alerts.length > 0) {
      getFirstLink && setRedirect(true);
      if (redirect === true && getFirstLink && asPath !== getFirstLink) {
        setTimeout(() => {
          router.push(getFirstLink);
        }, 3000);
      }
      toast.custom(
        (t) => (
          <ToastComponent t={t} key={t.id} alert={alerts[alerts.length - 1]} />
        ),
        {
          position: "bottom-center",
          id: `${alerts[alerts.length - 1].id}`,
          duration: alerts[alerts.length - 1].timeout || 5000,
        }
      );
    }
  }, [alerts, redirect, getFirstLink, asPath, history]);
  return (
    <React.Fragment>
      <Toaster />
    </React.Fragment>
  );
});

export default MulipleAlerts;
