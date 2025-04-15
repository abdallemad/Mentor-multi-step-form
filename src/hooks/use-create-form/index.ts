import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema, FromType } from "./form-schema";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "@/redux/features/user";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

export const useCreateForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((s: RootState) => s.user);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<FromType>({
    resolver: zodResolver(FormSchema),
    defaultValues: state.info, // safe fallback
  });

  // Load data from localStorage *after* hydration
  useEffect(() => {
    if (typeof window !== "undefined") {
      const info = localStorage.getItem("userInfo");
      if (info) {
        const parsed = JSON.parse(info);
        form.reset(parsed); // update form values safely
      }
    }
  }, [form]);

  function onSubmit(data: FromType) {
    setLoading(true);
    dispatch(setInfo(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
    router.push("/sign-up/step/plan");
    setLoading(false);
  }

  return { form, onSubmit, loading };
};
