"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
const Seo = () => {
  return (
    <div className="flex h-[calc(100vh-4.5rem)] w-full overflow-hidden rounded-lg border-2 bg-background">
      {/* Main Content */}
      <div className="flex flex-1 flex-col w-full">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 h-[60px] px-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Profile</h2>
          </div>
        </div>

        {/* Content */}
        <ScrollArea className="flex-1 h-0">
          <div className="flex flex-col items-center justify-start p-6">
            <div className="flex w-full max-w-5xl flex-col gap-6 py-6">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex items-center gap-4">
                  <div
                    className="w-32 min-h-32 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1RrSlYtu-3PBeIgiJ-CZiv2_4ULKeo9SjVqcp0VaJgIzqGteT2Anoei1tP3IVwyoaZJ9t9L5uRu4jOd0V4CYxeL8oXzfwXXIqe_zoflB8Sz8iUTcD7CGm3P5aPbTM04QB_8aplut7EkAgtYRiH3_9wEM8iGnjV6GSfl9Aw5Q8YA4-klJqr17ua1mFM5TYlGLcVAfHmkhrgPPuD5vm9pllSpNeRn9PLfwiLwGvyeUXJT8_7L6ZcsIdSbi3yunPG_CR9M8zU-TmPR0")',
                    }}
                  />
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold tracking-tight text-primary">
                      Sophia Carter
                    </p>
                    <p className="text-muted-foreground">Product Manager</p>
                    <p className="text-muted-foreground">Joined 2021</p>
                  </div>
                </div>
                <Button variant="outline">Edit Profile</Button>
              </div>

              {/* Personal Info */}
              <section>
                <h2 className="text-xl font-bold px-1 pb-3 pt-5">
                  Personal Information
                </h2>
                <div className="grid grid-cols-[30%_1fr] gap-x-6 border-t border-border py-5">
                  <span className="text-muted-foreground">Full Name</span>
                  <span>Sophia Carter</span>
                  <span className="text-muted-foreground">Email</span>
                  <span>sophia.carter@example.com</span>
                  <span className="text-muted-foreground">Phone</span>
                  <span>+1 (555) 123-4567</span>
                  <span className="text-muted-foreground">Location</span>
                  <span>San Francisco, CA</span>
                </div>
              </section>

              {/* Account Settings */}
              <section>
                <h2 className="text-xl font-bold px-1 pb-3 pt-5">
                  Account Settings
                </h2>
                <div className="flex items-center justify-between border-b border-border py-4">
                  <div>
                    <p className="font-medium">Password</p>
                    <p className="text-sm text-muted-foreground">
                      Change your password
                    </p>
                  </div>
                  <Button variant="outline">Change</Button>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-medium">Email Preferences</p>
                    <p className="text-sm text-muted-foreground">
                      Manage your email preferences
                    </p>
                  </div>
                  <Button variant="outline">Manage</Button>
                </div>
              </section>

              {/* Activity Overview */}
              <section>
                <h2 className="text-xl font-bold px-1 pb-3 pt-5">
                  Activity Overview
                </h2>
                <div className="flex flex-wrap gap-4">
                  {[
                    { label: "Projects", value: 12 },
                    { label: "Tasks", value: 45 },
                    { label: "Completed", value: 30 },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex-1 min-w-[150px] rounded-lg border border-border p-4"
                    >
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-2xl font-bold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Seo;

// "use client";
// import { Button } from "@/components/ui/button";

// export default function Profile() {
//   return (
//     <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
//       <div className="flex flex-col items-center justify-start p-6">
//         {/* Header */}
//         <div className="flex items-center gap-4 w-full max-w-5xl">
//           <div
//             className="rounded-full bg-cover bg-center aspect-square size-10"
//             style={{
//               backgroundImage:
//                 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNY50tS88zaAwtIvXhTY4WAITRa1dme3Zxl50P-8xce0ElbSXZYtIPPxAaqoerLnan71Oaq0slrErwAbX4bPixy4rjfjCXDLdziGhr527sH5dpNjg8rsVBPaUJIrny45RIlSG89Teo1zsaPHUXpE0KomfU0xYi2jC2lzjTYgvQb6Gy_5WfGYxDKzGSFpamLCbIoaahpuOiUnHHGpoAU0plwMluZdRS6Td0Bsemf7OADDLbyESkVyTOZMoKIPJ_a2Ml-8VdQ68TwCM")',
//             }}
//           />
//           <h1 className="text-lg font-medium text-primary">RhinoTech</h1>
//         </div>

//         {/* Profile Section */}
//         <div className="flex w-full max-w-5xl flex-col gap-6 py-6">
//           <div className="flex flex-wrap justify-between items-center">
//             <div className="flex items-center gap-4">
//               <div
//                 className="w-32 min-h-32 rounded-full bg-cover bg-center"
//                 style={{
//                   backgroundImage:
//                     'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1RrSlYtu-3PBeIgiJ-CZiv2_4ULKeo9SjVqcp0VaJgIzqGteT2Anoei1tP3IVwyoaZJ9t9L5uRu4jOd0V4CYxeL8oXzfwXXIqe_zoflB8Sz8iUTcD7CGm3P5aPbTM04QB_8aplut7EkAgtYRiH3_9wEM8iGnjV6GSfl9Aw5Q8YA4-klJqr17ua1mFM5TYlGLcVAfHmkhrgPPuD5vm9pllSpNeRn9PLfwiLwGvyeUXJT8_7L6ZcsIdSbi3yunPG_CR9M8zU-TmPR0")',
//                 }}
//               />
//               <div className="flex flex-col">
//                 <p className="text-2xl font-bold tracking-tight text-primary">
//                   Sophia Carter
//                 </p>
//                 <p className="text-muted-foreground">Product Manager</p>
//                 <p className="text-muted-foreground">Joined 2021</p>
//               </div>
//             </div>
//             <Button variant="outline">Edit Profile</Button>
//           </div>

//           {/* Personal Info */}
//           <section>
//             <h2 className="text-xl font-bold px-1 pb-3 pt-5">
//               Personal Information
//             </h2>
//             <div className="grid grid-cols-[30%_1fr] gap-x-6 border-t border-border py-5">
//               <span className="text-muted-foreground">Full Name</span>
//               <span>Sophia Carter</span>
//               <span className="text-muted-foreground">Email</span>
//               <span>sophia.carter@example.com</span>
//               <span className="text-muted-foreground">Phone</span>
//               <span>+1 (555) 123-4567</span>
//               <span className="text-muted-foreground">Location</span>
//               <span>San Francisco, CA</span>
//             </div>
//           </section>

//           {/* Account Settings */}
//           <section>
//             <h2 className="text-xl font-bold px-1 pb-3 pt-5">
//               Account Settings
//             </h2>
//             <div className="flex items-center justify-between border-b border-border py-4">
//               <div>
//                 <p className="font-medium">Password</p>
//                 <p className="text-sm text-muted-foreground">
//                   Change your password
//                 </p>
//               </div>
//               <Button variant="outline">Change</Button>
//             </div>
//             <div className="flex items-center justify-between py-4">
//               <div>
//                 <p className="font-medium">Email Preferences</p>
//                 <p className="text-sm text-muted-foreground">
//                   Manage your email preferences
//                 </p>
//               </div>
//               <Button variant="outline">Manage</Button>
//             </div>
//           </section>

//           {/* Activity Overview */}
//           <section>
//             <h2 className="text-xl font-bold px-1 pb-3 pt-5">
//               Activity Overview
//             </h2>
//             <div className="flex flex-wrap gap-4">
//               {[
//                 { label: "Projects", value: 12 },
//                 { label: "Tasks", value: 45 },
//                 { label: "Completed", value: 30 },
//               ].map((item) => (
//                 <div
//                   key={item.label}
//                   className="flex-1 min-w-[150px] rounded-lg border border-border p-4"
//                 >
//                   <p className="text-sm font-medium">{item.label}</p>
//                   <p className="text-2xl font-bold">{item.value}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }
