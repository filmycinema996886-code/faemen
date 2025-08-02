@@ .. @@
         {/* Video Preview */}
         <div className="max-w-4xl mx-auto">
-          <div className="bg-gray-100 rounded-lg border-2 border-gray-200 p-16 flex items-center justify-center min-h-96">
-            <div className="text-center">
-              <h2 className="text-6xl font-bold text-indigo-600 mb-2">FOR SCREEN</h2>
-              <h2 className="text-6xl font-bold text-indigo-600 mb-2">PROVIDERS</h2>
-              <h2 className="text-6xl font-bold text-indigo-600 italic">AI SIMPLI...</h2>
-            </div>
+          <div className="relative rounded-xl overflow-hidden shadow-2xl">
+            <video
+              autoPlay
+              muted
+              loop
+              playsInline
+              className="w-full h-auto"
+              poster="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
+            >
+              <source src="https://d3kdzyvtj6vooy.cloudfront.net/video-92c97d73-127c-4776-b727-0ae6e14d6301" type="video/mp4" />
+              Your browser does not support the video tag.
+            </video>
+            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
           </div>
         </div>
       </div>