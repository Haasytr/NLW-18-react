import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuetsStepProps {
  toggleGuestsModal: () => void;
  emailsToInvite: string[];
  toggleConfirmTripModal: () => void;
}

export function InviteGuestsStep({
  emailsToInvite,
  toggleGuestsModal,
  toggleConfirmTripModal,
}: InviteGuetsStepProps) {
  return (
    <div
      className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape
        gap-3"
    >
      <button
        onClick={() => toggleGuestsModal()}
        type="button"
        className="flex items-center gap-2 flex-1"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        <span className="bg-transparent outline-none text-lg text-zinc-400 flex-1 text-left">
          {emailsToInvite.length > 0 ? (
            <span className="text-zinc-400">
              {emailsToInvite.length} pessoa(s) convidada(s)
            </span>
          ) : (
            "Quem estará na viagem?"
          )}
        </span>
      </button>

      <Button onClick={toggleConfirmTripModal} variant="primary">
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
