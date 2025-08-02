@@ .. @@
         {/* Video Preview */}
         <div className="max-w-4xl mx-auto">
           <div className="relative rounded-xl overflow-hidden shadow-2xl">
-            <video
-              autoPlay
-              muted
-              loop
-              playsInline
-              className="w-full h-auto"
-              poster="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
-            >
-              <source src="https://d3kdzyvtj6vooy.cloudfront.net/video-92c97d73-127c-4776-b727-0ae6e14d6301" type="video/mp4" />
-              Your browser does not support the video tag.
-            </video>
-            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
+            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-16 flex items-center justify-center min-h-96 relative overflow-hidden">
+              {/* Animated background elements */}
+              <div className="absolute inset-0">
+                <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
+                <div className="absolute top-32 right-20 w-16 h-16 bg-white bg-opacity-5 rounded-full animate-bounce"></div>
+                <div className="absolute bottom-20 left-32 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
+                <div className="absolute bottom-32 right-10 w-12 h-12 bg-white bg-opacity-5 rounded-full animate-bounce"></div>
+              </div>
+              
+              <div className="text-center relative z-10">
+                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">FOR SCREEN</h2>
+                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>PROVIDERS</h2>
+                <h2 className="text-4xl md:text-6xl font-bold text-white italic animate-fade-in" style={{animationDelay: '0.4s'}}>AI SIMPLIFIED</h2>
+              </div>
+            </div>
           </div>
         </div>
       </div>