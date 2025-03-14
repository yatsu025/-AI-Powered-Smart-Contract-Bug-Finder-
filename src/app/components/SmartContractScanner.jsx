import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud } from "lucide-react";

export default function SmartContractScanner() {
  const [code, setCode] = useState("");
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onload = (e) => setCode(e.target.result);
      reader.readAsText(uploadedFile);
      setFile(uploadedFile);
    }
  };

  const handleScan = () => {
    console.log("Scanning for bugs in:", code);
    // AI Integration will go here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="w-full max-w-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">AI-Powered Smart Contract Bug Finder</h1>
        
        <label className="flex flex-col items-center justify-center w-full border-2 border-dashed p-4 rounded-lg cursor-pointer mb-4">
          <UploadCloud className="w-6 h-6 mb-2 text-gray-500" />
          <span className="text-gray-600">Upload Solidity File</span>
          <Input type="file" accept=".sol" onChange={handleFileUpload} className="hidden" />
        </label>
        
        <Textarea
          className="w-full h-40 p-2 border rounded-lg"
          placeholder="Paste your Solidity code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white" onClick={handleScan}>
          Scan for Bugs
        </Button>
      </Card>
    </div>
  );
}
