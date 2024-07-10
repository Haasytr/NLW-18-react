import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  toggleGuestsInput: () => void;
  setDestination: (destination: string) => void;
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
  eventStartAndEndDates: DateRange | undefined;
}

export function DestinationAndDateStep({
  isGuestInputOpen,
  toggleGuestsInput,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatepickerOpen] = useState(false);

  function toggleDatePicker() {
    return setIsDatepickerOpen(!isDatePickerOpen);
  }

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? `${format(eventStartAndEndDates.from, "d MMM")} Até ${format(
          eventStartAndEndDates.to,
          "d 'de' MMM"
        )}`
      : "Quando?";

  return (
    <div
      className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape
        gap-3"
    >
      <div className="flex items-center gap-2 ">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          placeholder="para onde você vai?"
          onChange={(event) => setDestination(event.target.value)}
          className="bg-transparent outline-none text-lg placeholder-zinc-400 flex-1"
        />
      </div>

      <button
        onClick={toggleDatePicker}
        className="flex items-center gap-2 flex-1 outline-none"
        disabled={isGuestInputOpen}
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-left text-lg text-zinc-400">{displayedDate}</span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button onClick={toggleDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>
            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800" />

      {!isGuestInputOpen ? (
        <Button onClick={() => toggleGuestsInput()} variant="primary">
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      ) : (
        <Button onClick={() => toggleGuestsInput()} variant="secondary">
          Alterar local e data
          <Settings2 className="size-5" />
        </Button>
      )}
    </div>
  );
}
