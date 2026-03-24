import { CreateUserPage } from "@/features/users";

export default function App(){

    return(
      // h-36 es altura de 36. flex-col para flex en colimna. mb-32 es margin botton. items-center objetos centrados
        <div className="min-h text-center grid grid-cols-1 gap-4 mt-5">

          <h1 className="text-white text-4xl font-bold bg-fuchsia-800 p-6">
          Con rico programar con Tailwind funciona full...
          </h1>
          <CreateUserPage />
        </div>
    );
};