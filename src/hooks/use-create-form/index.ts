import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema, FromType } from "./form-schema";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "@/redux/features/user";
import { RootState } from "@/redux/store";
import { useState } from "react";

export const useCreateForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((s: RootState) => s.user);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  function getInfoFromLocalStorage() {
    const info = localStorage.getItem("userInfo");
    if (info) {
      return JSON.parse(info);
    }
    return state.info;
  }
  const form = useForm<FromType>({
    resolver: zodResolver(FormSchema),
    defaultValues: getInfoFromLocalStorage(),
  });

  function onSubmit(data: FromType) {
    setLoading(true);
    dispatch(setInfo(data));
    // Save data to local storage
    localStorage.setItem("userInfo", JSON.stringify(data));
    router.push("/sign-up/step/2");
    setLoading(false);
  }

  return { form, onSubmit, loading };
};
