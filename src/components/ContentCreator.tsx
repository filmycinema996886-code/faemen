@@ .. @@
           </div>
         </div>
       </div>
-
-      <style jsx>{`
-        @keyframes float {
-          0%, 100% {
-            transform: translateY(0px) rotate(0deg);
-          }
-          25% {
-            transform: translateY(-10px) rotate(5deg);
-          }
-          50% {
-            transform: translateY(-20px) rotate(0deg);
-          }
-          75% {
-            transform: translateY(-10px) rotate(-5deg);
-          }
-        }
-        
-        .animate-float {
-          animation: float 6s ease-in-out infinite;
-        }
-      `}</style>
     </div>
   );
 };