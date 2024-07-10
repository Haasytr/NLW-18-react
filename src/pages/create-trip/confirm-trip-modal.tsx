import { User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalInterface {
  toggleConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void;
}

export function ConfirmTripModal({
  createTrip,
  toggleConfirmTripModal,
  setOwnerEmail,
  setOwnerName,
}: ConfirmTripModalInterface) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button onClick={() => toggleConfirmTripModal()}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="text-semibold text-zinc-100">
              FLorianópolis, Brasil
            </span>
            nas datas de{" "}
            <span className="text-semibold text-zinc-100">
              16 a 27 de agosto
            </span>
            preencha seus dados abaixo
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 px-4 rounded-lg bg-zinc-950 border-zinc-800 flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              type="text"
              name="name"
              placeholder="seu nome completo"
              onChange={(event) => setOwnerName(event.target.value)}
              className="bg-transparent outline-none text-lg placeholder-zinc-400 flex-1"
            />
          </div>
          <div className="h-14 px-4 rounded-lg bg-zinc-950 border-zinc-800 flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              onChange={(event) => setOwnerEmail(event.target.value)}
              placeholder="seu email pessoal"
              className="bg-transparent outline-none text-lg placeholder-zinc-400 flex-1"
            />
          </div>
          <Button type="submit" variant="primary" size="full">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
