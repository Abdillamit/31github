import Image from "next/image";
import avatar from "@/app/img/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";
import { useState } from "react";
import { LockKeyhole, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent } from "../ui/dialog";
import LoginAccountForm from "../form/LoginAccountForm";
import CreateAccountForm from "../form/CreateAccountForm";
export default function ManageAccount() {
  const [isDelete, setIsDelete] = useState<Boolean>(false);
  const [open, setOpen] = useState<Boolean>(false);
  const [state, setState] = useState<"login" | "create">("create");

  return (
    <div
      className={
        "min-h-screen flex justify-center  flex-col items-center relative"
      }
    >
      <div className={"flex justify-center flex-col items-center"}>
        <h1 className={"text-white font-bold text-5xl my-12"}>
          Who's Watching?
        </h1>
        <ul className={"flex p-0 my-12"}>
          <li
            onClick={() => {
              setOpen(true);
              setState("login");
            }}
            className={
              "max-w-[200px] w-[155px] cursor-pointer155px flex flex-col items-center gap-3 min-w-[200px]"
            }
          >
            <div className={"relative"}>
              <div
                className={
                  "max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] object-cover w-[155px] h-[155px] relative"
                }
              >
                <Image src={avatar} alt="Avatar Icon" fill />
              </div>
              {isDelete && (
                <div
                  className={"absolute transform bottom-0 z-10 cursor-pointer"}
                >
                  <Trash2 className={"h-7 w-7 text-red-600"} />
                </div>
              )}
            </div>
            <div className={"flex items-center  gap-2"}>
              <span className={"font-bold font-mono text-xl"}>Abdillamit</span>
              <LockKeyhole />
            </div>
          </li>

          <li
            onClick={() => {
              setOpen(true);
              setState("create");
            }}
            className={
              "border  bg-[#e5b109] font-bold text-xl border-black max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] w-[155px] h-[155px] cursor-pointer flex justify-center items-center"
            }
          >
            Add accaunt
          </li>
        </ul>
        <Button
          onClick={() => setIsDelete((prev) => !prev)}
          className={
            "bg-transparent rounded-none hover:bg-transparent !text-white border border-gray-100 cursor-pointer tracking-wide inline-flex text-sm px-[1.5em] py-[0.5em]"
          }
        >
          Manage Profile
        </Button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            {state === "login" && <LoginAccountForm />}
            {state === "create" && <CreateAccountForm />}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
