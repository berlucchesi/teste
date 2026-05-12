import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/services/app.module'

enum _a {
    A,
    B,
    C
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    await app.listen(process.env.PORT ?? 3000)
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap()
