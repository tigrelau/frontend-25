

export default function Header() {
    const Hero = () => {
    const handleSubmit = (e) => {
    e.preventDefault();
    alert('E-mail enviado! Obrigado por se inscrever.');
 };
  return (
   <div className ="relative h-screen bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-500">
            <div className="relative text-white text-center p-6 max-w-4xl z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                    ThePinkForm
                    </h1>
                    <p className="text-lg sm:text-xl mb-10 font-light">
                        Subscribe
                        </p>
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
           {/* Campo de E-mail */}
<input
               type="email"
               placeholder="Digite seu melhor e-mail..."
               required
               className="p-3 rounded-lg border-2 border-gray-300 text-gray-800 w-full sm:w-80 focus:border-indigo-500 focus:ring-indigo-500 shadow-lg"
           />
           {/* Botão de Envio */}
<button
               type="submit"
               className="p-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
>
               Assinar
</button>
</form>
            </div>
        </div>
   </div>
  );
}