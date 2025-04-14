import { add_ons } from "@/config/add-ons";
import { plans } from "@/config/plans";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type INFO = {
  name: string;
  email: string;
  phone: string;
};
interface CounterState {
  info: INFO;
  plan: (typeof plans)[number];
  addsons: (typeof add_ons)[number][];
  plan_type: "monthly" | "yearly";
}

const initialState: CounterState = {
  info: {
    name: "",
    email: "",
    phone: "",
  },
  plan: plans[0],
  addsons: [],
  plan_type: 'monthly',
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<INFO>) => {
      state.info = action.payload;
    },
    setPlan: (state, action: PayloadAction<(typeof plans)[number]>) => {
      state.plan = action.payload;
    },
    setPlanType: (state, action: PayloadAction<"monthly" | "yearly">) => {
      state.plan_type = action.payload;
    },
    toggleAddOnsState: (
      state,
      action: PayloadAction<(typeof add_ons)[number]>
    ) => {
      const exists = state.addsons.find(
        (a) => a.title === action.payload.title
      );
      if (exists) {
        state.addsons = state.addsons.filter(
          (a) => a.title !== action.payload.title
        );
      } else {
        state.addsons = [...state.addsons, action.payload];
      }
    },
  },
});

export const { setInfo, setPlan, setPlanType, toggleAddOnsState } =
  user.actions;
export default user.reducer;
