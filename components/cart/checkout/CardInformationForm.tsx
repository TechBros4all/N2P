import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const cardInformationSchema = z.object({
  cardholderName: z.string().min(1, "Cardholder name is required"),
  cardNumber: z
    .string()
    .min(1, "Card number is required")
    .regex(/^[0-9]{16}$/, "Card number must be 16 digits"),
  expiryDate: z.date({
    required_error: "Expiry date is required",
  }),
  cvv: z.string().regex(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits"),
});

const CardInformationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof cardInformationSchema>>({
    resolver: zodResolver(cardInformationSchema),
  });

  const expiryDate = watch("expiryDate");
  const setExpiryDate = (date: Date | null) => {
    if (date) {
      setValue("expiryDate", date);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[16px] font-semibold">Enter Card Information</h2>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <Label>Cardholder Name</Label>
          <Input
            {...register("cardholderName")}
            type="text"
            placeholder="Enter cardholder name"
            className="w-full"
          />
          {errors.cardholderName && (
            <p className="text-sm text-red-500 mt-1">
              {errors.cardholderName.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <Label>Card Number</Label>
          <Input
            {...register("cardNumber")}
            type="text"
            placeholder="Enter card number"
            className="w-full"
          />
          {errors.cardNumber && (
            <p className="text-sm text-red-500 mt-1">
              {errors.cardNumber.message}
            </p>
          )}
        </div>
        <div className="w-full flex items-center gap-4">
          <div>
            <Label>Expiry Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full h-14 text-left font-normal",
                    !expiryDate && "text-muted-foreground"
                  )}
                >
                  {expiryDate ? (
                    format(expiryDate, "MM/yyyy")
                  ) : (
                    <span>Pick expiry date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={expiryDate}
                  onSelect={(day: Date | undefined) =>
                    setExpiryDate(day ?? null)
                  }
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label>CVV</Label>
            <Input
              {...register("cvv")}
              type="text"
              placeholder="Enter CVV"
              className="w-full"
              maxLength={4}
            />
            {errors.cvv && (
              <p className="text-sm text-red-500 mt-1">{errors.cvv.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInformationForm;
