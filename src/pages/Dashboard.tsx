
import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Upload, 
  FileText, 
  Info, 
  Check, 
  Shield, 
  ChevronDown,
  Search,
  Target
} from "lucide-react";
import { toast } from "sonner";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function Dashboard() {
  const [text, setText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedMode, setSelectedMode] = useState("aggressive");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  
  // AI Detection states
  const [detectionText, setDetectionText] = useState("");
  const [detectionResult, setDetectionResult] = useState<{percentage: number, algorithm: string} | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("all");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    // Check file type
    const validTypes = ['.txt', '.pdf', '.doc', '.docx'];
    const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    
    if (!validTypes.includes(fileExtension)) {
      toast.error("不支持的文件类型。请上传 PDF、TXT、DOC 或 DOCX 格式的文件。");
      return;
    }
    
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("文件太大，最大限制为 10MB。");
      return;
    }
    
    setUploadedFile(file);
    toast.success(`文件 "${file.name}" 上传成功`);
    
    // For demo purposes, we'll mock reading a text file
    if (fileExtension === '.txt') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setText(content);
      };
      reader.readAsText(file);
    } else {
      // For other file types in a real app, you would send to server for processing
      setText(`从 ${file.name} 提取的文本将在此显示。在实际应用中，这将通过后端处理。`);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleProcessText = () => {
    if (!text.trim()) {
      toast.error("请输入文本或上传文件");
      return;
    }
    
    setIsProcessing(true);
    
    // Mock AI processing with a timeout
    setTimeout(() => {
      // Example transformation - in a real app this would be an API call
      const humanizedText = text
        .split('.')
        .map(sentence => {
          // Simple text transformation for demonstration
          let transformed = sentence.trim();
          if (transformed.length > 5) {
            transformed = transformed.charAt(0).toUpperCase() + transformed.slice(1);
            // Replace common words for demonstration
            transformed = transformed
              .replace(/AI/g, "人工智能")
              .replace(/quickly/g, "迅速地")
              .replace(/very/g, "非常");
          }
          return transformed;
        })
        .join('. ');
      
      setOutputText(humanizedText);
      setIsProcessing(false);
      toast.success("文本处理完成");
    }, 1500);
  };

  const handleTrySample = () => {
    const sampleText = `人工智能(AI)是一种让机器模仿人类智能行为的技术。它包括机器学习，自然语言处理和计算机视觉等领域。这些技术使计算机能够学习、推理和解决问题，从而在各种应用场景中表现出类似人类的智能行为，如语言翻译、图像识别和决策支持等。`;
    setText(sampleText);
    toast("示例文本已加载", {
      description: "您可以编辑或直接处理这段文本",
    });
  };

  // AI Detection handlers
  const handleDetectionTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetectionText(e.target.value);
  };

  const handleDetectAI = () => {
    if (!detectionText.trim()) {
      toast.error("请输入要检测的文本");
      return;
    }
    
    setIsDetecting(true);
    
    // Mock AI detection with timeout
    setTimeout(() => {
      // Generate mock detection percentage based on algorithm
      let percentage = Math.floor(Math.random() * 100);
      
      switch (selectedAlgorithm) {
        case "turnitin":
          percentage = Math.floor(Math.random() * 40) + 20; // 20-60%
          break;
        case "gptzero":
          percentage = Math.floor(Math.random() * 50) + 30; // 30-80%
          break;
        case "zerogpt":
          percentage = Math.floor(Math.random() * 60) + 15; // 15-75%
          break;
        default:
          percentage = Math.floor(Math.random() * 70) + 25; // 25-95%
      }
      
      setDetectionResult({
        percentage,
        algorithm: selectedAlgorithm === "all" ? "综合算法" : 
          selectedAlgorithm === "turnitin" ? "Turnitin" :
          selectedAlgorithm === "gptzero" ? "GPTZero" : "ZeroGPT"
      });
      setIsDetecting(false);
      toast.success("AI检测完成");
    }, 1200);
  };

  const handleTryDetectionSample = () => {
    const sampleText = `The rapid advancement of artificial intelligence has transformed numerous industries and continues to reshape our understanding of technology's role in society. Machine learning algorithms now power everything from recommendation systems to autonomous vehicles, demonstrating unprecedented capabilities in pattern recognition and data analysis.`;
    setDetectionText(sampleText);
    toast("检测示例文本已加载", {
      description: "点击检测按钮开始AI率检测",
    });
  };
  
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">您的内容</h1>
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-blue-500">
              <Info size={16} />
              <span>使用提示</span>
            </Button>
            <div className="text-xl font-medium ml-4">输出</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="flex flex-col">
            <Card className="flex-1">
              <CardContent className="p-6 flex flex-col h-[500px]">
                <textarea
                  placeholder="在这里输入您想要人性化的文本"
                  className="flex-1 resize-none border-none outline-none bg-transparent text-gray-800"
                  value={text}
                  onChange={handleTextChange}
                />
                
                {!text && (
                  <div 
                    className={`mt-8 border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center ${isDragging ? 'bg-blue-50 border-blue-300' : 'border-gray-200'}`}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleFileDrop}
                  >
                    <div className="bg-blue-50 text-blue-500 p-4 rounded-md mb-4">
                      支持的文件类型: DOC/DOCX/PDF/TXT。最大文件大小为 10 MB。
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 w-full mt-4">
                      {/* Upload File Button */}
                      <div className="col-span-1">
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100">
                            <Upload size={24} className="text-blue-500 mb-2" />
                            <span className="text-sm text-center text-gray-700">上传文件</span>
                          </div>
                        </label>
                        <input
                          id="file-upload"
                          type="file"
                          accept=".txt,.pdf,.doc,.docx"
                          className="hidden"
                          onChange={handleFileInputChange}
                        />
                      </div>
                      
                      {/* Try Sample Button */}
                      <div 
                        className="col-span-1 flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                        onClick={handleTrySample}
                      >
                        <FileText size={24} className="text-gray-500 mb-2" />
                        <span className="text-sm text-center text-gray-700">试用示例</span>
                      </div>
                      
                      {/* Paste Text Button */}
                      <div 
                        className="col-span-1 flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          navigator.clipboard.readText().then(
                            clipText => {
                              setText(clipText);
                              toast.success("已从剪贴板粘贴文本");
                            }
                          ).catch(err => {
                            toast.error("无法访问剪贴板");
                          });
                        }}
                      >
                        <FileText size={24} className="text-gray-500 mb-2" />
                        <span className="text-sm text-center text-gray-700">粘贴文本</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="mt-4 flex justify-between items-center">
              <Button 
                variant="outline" 
                size="sm" 
                className="px-4"
                onClick={() => {
                  setText("");
                  setUploadedFile(null);
                }}
                disabled={!text}
              >
                AI检测
              </Button>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">模式：</span>
                <Select 
                  value={selectedMode} 
                  onValueChange={setSelectedMode}
                >
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="选择模式" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aggressive">
                      <div className="flex items-center gap-2">
                        <Shield size={16} className="text-blue-500" />
                        <span>强力模式</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="balanced">
                      <div className="flex items-center gap-2">
                        <Shield size={16} className="text-green-500" />
                        <span>平衡模式</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="light">
                      <div className="flex items-center gap-2">
                        <Shield size={16} className="text-yellow-500" />
                        <span>轻度模式</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                onClick={handleProcessText}
                disabled={!text || isProcessing}
                className="px-6"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                    <span>处理中...</span>
                  </div>
                ) : "人性化"}
              </Button>
            </div>
          </div>
          
          {/* Output Section */}
          <Card className="h-[500px] overflow-hidden flex flex-col">
            <CardContent className="p-6 flex-1 overflow-auto">
              {outputText ? (
                <div className="h-full">
                  <p className="text-gray-800 whitespace-pre-wrap">{outputText}</p>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 mb-4 relative">
                    <img 
                      src="/lovable-uploads/87150403-6369-481f-b5eb-0572e7445d21.png" 
                      alt="AI Mascot" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">您的AI处理文本将显示在这里</h3>
                  <p className="text-gray-500 max-w-sm">
                    在左侧输入文本或上传文件，然后点击"人性化"按钮处理
                  </p>
                </div>
              )}
            </CardContent>
            
            {outputText && (
              <div className="border-t border-gray-100 p-4 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="mr-2"
                  onClick={() => {
                    navigator.clipboard.writeText(outputText);
                    toast.success("已复制到剪贴板");
                  }}
                >
                  复制
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    const blob = new Blob([outputText], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = '智绕AI处理结果.txt';
                    a.click();
                    URL.revokeObjectURL(url);
                    toast.success("文件已下载");
                  }}
                >
                  下载
                </Button>
              </div>
            )}
          </Card>
        </div>
        
        {/* AI Detection Section */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">AI检测率</h2>
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-blue-500">
                <Info size={16} />
                <span>融合三家算法</span>
              </Button>
              <div className="text-xl font-medium ml-4">检测结果</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Detection Input Section */}
            <div className="flex flex-col">
              <Card className="flex-1">
                <CardContent className="p-6 flex flex-col h-[400px]">
                  <textarea
                    placeholder="在这里输入您想要检测AI率的文本"
                    className="flex-1 resize-none border-none outline-none bg-transparent text-gray-800"
                    value={detectionText}
                    onChange={handleDetectionTextChange}
                  />
                  
                  {!detectionText && (
                    <div className="mt-8 border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center border-gray-200">
                      <div className="bg-blue-50 text-blue-500 p-4 rounded-md mb-4 text-center">
                        支持检测英文、中文等多语言文本的AI生成率
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 w-full mt-4">
                        {/* Try Sample Button */}
                        <div 
                          className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                          onClick={handleTryDetectionSample}
                        >
                          <FileText size={24} className="text-gray-500 mb-2" />
                          <span className="text-sm text-center text-gray-700">试用示例</span>
                        </div>
                        
                        {/* Paste Text Button */}
                        <div 
                          className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            navigator.clipboard.readText().then(
                              clipText => {
                                setDetectionText(clipText);
                                toast.success("已从剪贴板粘贴文本");
                              }
                            ).catch(err => {
                              toast.error("无法访问剪贴板");
                            });
                          }}
                        >
                          <FileText size={24} className="text-gray-500 mb-2" />
                          <span className="text-sm text-center text-gray-700">粘贴文本</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">算法：</span>
                  <Select 
                    value={selectedAlgorithm} 
                    onValueChange={setSelectedAlgorithm}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="选择算法" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">
                        <div className="flex items-center gap-2">
                          <Target size={16} className="text-purple-500" />
                          <span>综合算法</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="turnitin">
                        <div className="flex items-center gap-2">
                          <Shield size={16} className="text-red-500" />
                          <span>Turnitin</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="gptzero">
                        <div className="flex items-center gap-2">
                          <Shield size={16} className="text-blue-500" />
                          <span>GPTZero</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="zerogpt">
                        <div className="flex items-center gap-2">
                          <Shield size={16} className="text-green-500" />
                          <span>ZeroGPT</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  onClick={handleDetectAI}
                  disabled={!detectionText || isDetecting}
                  className="px-6"
                >
                  {isDetecting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                      <span>检测中...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Search size={16} />
                      <span>开始检测</span>
                    </div>
                  )}
                </Button>
              </div>
            </div>
            
            {/* Detection Results Section */}
            <Card className="h-[400px] overflow-hidden flex flex-col">
              <CardContent className="p-6 flex-1 overflow-auto">
                {detectionResult ? (
                  <div className="h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
                        <div 
                          className={`absolute inset-0 rounded-full border-8 border-t-8 transform -rotate-90 ${
                            detectionResult.percentage > 70 ? 'border-red-500' :
                            detectionResult.percentage > 40 ? 'border-orange-500' : 'border-green-500'
                          }`}
                          style={{
                            borderRightColor: 'transparent',
                            borderBottomColor: 'transparent',
                            borderLeftColor: 'transparent',
                            clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(2 * Math.PI * detectionResult.percentage / 100 - Math.PI/2)}% ${50 + 50 * Math.sin(2 * Math.PI * detectionResult.percentage / 100 - Math.PI/2)}%, 50% 50%)`
                          }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className={`text-2xl font-bold ${
                              detectionResult.percentage > 70 ? 'text-red-500' :
                              detectionResult.percentage > 40 ? 'text-orange-500' : 'text-green-500'
                            }`}>
                              {detectionResult.percentage}%
                            </div>
                            <div className="text-xs text-gray-500">AI检测率</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-lg font-medium text-gray-800">
                          {detectionResult.percentage > 70 ? 'AI生成概率较高' :
                           detectionResult.percentage > 40 ? 'AI生成概率中等' : 'AI生成概率较低'}
                        </p>
                        <p className="text-sm text-gray-600">
                          算法来源：{detectionResult.algorithm}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">检测建议</h4>
                      <p className="text-sm text-gray-600">
                        {detectionResult.percentage > 70 
                          ? "建议使用我们的AI降重功能进行文本优化处理"
                          : detectionResult.percentage > 40
                          ? "文本具有一定的AI特征，建议适当调整"
                          : "文本人性化程度良好，通过检测的概率较高"
                        }
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 mb-4 relative">
                      <Search className="w-full h-full text-gray-300" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">AI检测结果将显示在这里</h3>
                    <p className="text-gray-500 max-w-sm">
                      在左侧输入文本，选择检测算法，然后点击"开始检测"按钮
                    </p>
                  </div>
                )}
              </CardContent>
              
              {detectionResult && (
                <div className="border-t border-gray-100 p-4 flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="mr-2"
                    onClick={() => {
                      const resultText = `AI检测结果：${detectionResult.percentage}% (${detectionResult.algorithm})`;
                      navigator.clipboard.writeText(resultText);
                      toast.success("检测结果已复制到剪贴板");
                    }}
                  >
                    复制结果
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {
                      // Transfer detection text to main processing area
                      setText(detectionText);
                      toast.success("文本已转移到降重区域");
                      // Scroll to top
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    一键降重
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
        
        {/* Promotion Banner */}
        <Card className="mt-6 p-4 bg-blue-50 border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-md">
                <Shield className="text-blue-500" size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">享受智绕 Bypass 的无限功能</h3>
                <p className="text-gray-600">通过升级到无限计划，体验智绕 Bypass 的全部功能，没有任何限制。</p>
              </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600">升级</Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
