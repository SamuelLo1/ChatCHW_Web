import nav from "../components/nav";
export const metadata = {
    title: "ASHA & AI ", 
    description: 'Medical AI to help ASHAs'
}

const Rootlayout = ({ children }) => {
  return (
    <html lang ="en">
        <body>

                <main className ="app">
                  <div className ="text-center"
                  >
                    {children}
                  </div>
                    <nav/>
                </main>
        
        </body>
    </html>
  )
}

export default Rootlayout