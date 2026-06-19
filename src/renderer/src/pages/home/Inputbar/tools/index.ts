// Tool registry loader
// Import all tool definitions to register them

import './attachmentTool'
import './mentionModelsTool'
import './newTopicTool'
import './quickPhrasesTool'
import './thinkingTool'
import './webSearchTool'
import './urlContextTool'
// import './knowledgeBaseTool' // 已砍: 知识库功能
import './mcpToolsTool'
// import './generateImageTool' // 已砍: 绘画功能
import './clearTopicTool'
import './toggleExpandTool'
import './newContextTool'
// Agent Session tools
import './createSessionTool'
import './slashCommandsTool'
import './resourceTool'
import './permissionModeTool'

// Export registry functions
export { getAllTools, getTool, getToolsForScope, registerTool } from '../types'
