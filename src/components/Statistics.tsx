@@ .. @@
 import React from 'react';

 const Statistics = () => {
+  const [isVisible, setIsVisible] = React.useState(false);
+
+  React.useEffect(() => {
+    const observer = new IntersectionObserver(
+      ([entry]) => {
+        if (entry.isIntersecting) {
+          setIsVisible(true);
+        }
+      },
+      { threshold: 0.1 }
+    );
+
+    const element = document.getElementById('statistics-section');
+    if (element) {
+      observer.observe(element);
+    }
+
+    return () => {
+      if (element) {
+        observer.unobserve(element);
+      }
+    };
+  }, []);
+
   const stats = [
     {
       number: '>18000',
@@ -25,7 +47,7 @@ const Statistics = () => {
   ];

   return (
-    <div className="bg-white py-16">
+    <div id="statistics-section" className="bg-white py-16">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           {stats.map((stat, index) => (
@@ .. @@
-            <div key={index} className="space-y-2">
-              <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
+            <div key={index} className={`space-y-2 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: `${index * 0.1}s`}}>
+              <div className={`text-4xl md:text-5xl font-bold ${stat.color} hover:scale-110 transition-transform duration-300 cursor-default`}>
                 {stat.number}
               </div>
               <div className="text-gray-600 text-sm md:text-base">